package com.nettruyenfake.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

  @GetMapping("/")
  public String homePage(){
      return "user/homePage";
  }
  @GetMapping("/truyen-tranh/toan-chuc-phap-su-17023")
    public String truyenDetailsPage(){
      return "user/truyenDetails";
  }
}
