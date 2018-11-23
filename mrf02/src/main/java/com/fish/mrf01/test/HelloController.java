package com.fish.mrf01.test;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @Controller
    @RequestMapping
    public class HelloController {

        @RequestMapping(value = "/views")
        public String index(){

            return "download";
        }
    }

