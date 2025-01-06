import CodeSnippet from "./codesnippet"

const  javaCode = `
package com.eben.portfolio.controller;  

import com.example.portfolio.model.PortfolioItem;  
import com.example.portfolio.service.PortfolioService;  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Controller;  
import org.springframework.ui.Model;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestMapping;  

import java.util.List;  

@Controller  
@RequestMapping("/portfolio")  
public class PortfolioController {  

    private final PortfolioService portfolioService;  

    @Autowired  
    public PortfolioController(PortfolioService portfolioService) {  
        this.portfolioService = portfolioService;  
    }  

    @GetMapping  
    public String viewPortfolio(Model model) {  
        List<PortfolioItem> items = portfolioService.findAllItems();  
        model.addAttribute("items", items);  
        return "portfolio";  
    }  

    @PostMapping("/add")  
    public String addPortfolioItem(PortfolioItem item) {  
        portfolioService.saveItem(item);  
        return "redirect:/portfolio";  
    }  
}
`
const javascriptCode = `
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
`

// const typescriptCode = `
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   console.log(\`Hello, \${person.name}! Happy \${person.fun}!.\`);
// }

// const person: Person = { name: 'Eben', fun: 'Coding' };
// greet(person);
// `

// const reactCode = `
// import React from 'react';

// interface ButtonProps {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
//   <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
//     {children}
//   </button>
// );

// export default Button;
// `

const rustCode = `
// src/main.rs  

use actix_web::{web, App, HttpServer, Responder, HttpResponse, post, get};  
use serde::{Serialize, Deserialize};  
use std::sync::Mutex;  
use std::collections::HashMap;  

#[derive(Serialize, Deserialize)]  
struct PortfolioItem {  
    title: String,  
    description: String,  
    image_url: String,  
}  

struct AppState {  
    items: Mutex<HashMap<usize, PortfolioItem>>,  
}  

#[get("/portfolio")]  
async fn get_portfolio(data: web::Data<AppState>) -> impl Responder {  
    let items = data.items.lock().unwrap();  
    let portfolio_items: Vec<&PortfolioItem> = items.values().collect();  
    HttpResponse::Ok().json(portfolio_items)  
}  

#[post("/portfolio")]  
async fn add_portfolio_item(item: web::Json<PortfolioItem>, data: web::Data<AppState>) -> impl Responder {  
    let mut items = data.items.lock().unwrap();  
    let id = items.len() + 1; // Simple incrementing ID  
    items.insert(id, item.into_inner());  
    HttpResponse::Created().finish()  
}  

#[actix_web::main]  
async fn main() -> std::io::Result<()> {  
    let data = web::Data::new(AppState {  
        items: Mutex::new(HashMap::new()), // Initialize the items in a Mutex for thread safety  
    });  

    HttpServer::new(move || {  
        App::new()  
            .app_data(data.clone())  
            .service(get_portfolio)  
            .service(add_portfolio_item)  
    })  
    .bind("127.0.0.1:8080")?  
    .run()  
    .await  
}
`
export default function ShowCode({show}: {show: 'one'|'two'|'three'}) {

  const render = (show:string) => {
    switch(show){
      case 'one':
        return  <CodeSnippet 
        code={javascriptCode.trim()} 
        language="javascript" 
        title="Javascript code snippet" 
      />
      break;
      case 'two':
        return   <CodeSnippet 
        code={javaCode.trim()} 
        language="Java" 
        title="Java Springboot code snippet" 
      />
      break;
      default:
        return   <CodeSnippet 
        code={rustCode.trim()} 
        language="Rust" 
        title="Sample Rust web server with Actix-web " 
      />
    
    }
  }

  return render(show)
    
  
  
}