package edu.icet.controller;

import edu.icet.dto.Customer;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor

public class CustomerController {

    final CustomerService customerService;


    @PostMapping("/add")
    public Customer addCustomer(@RequestBody Customer customer) {
        customerService.addCustomer(customer);
        return customer;
    }

    @GetMapping("/getAll")
    public List<Customer> getAll(){


        return customerService.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public Customer deleteCustomer(@PathVariable("id") Integer id){
        customerService.deleteCustomer(id);

        return null;
    }
    @PutMapping("/update")
    public Customer updateCustomer(@RequestBody Customer customer){
        customerService.updateCustomer(customer);
        return customer;
    }




}
