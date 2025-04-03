package edu.icet.controller;

import edu.icet.dto.Customer;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/login")
@RequiredArgsConstructor

public class LoginController {

    final CustomerService customerService;


    @PostMapping("/add")
    public Customer addCustomer(@RequestBody Customer customer) {
        customerService.addCustomer(customer);
        return customer;
    }
}