package edu.icet.service;

import edu.icet.dto.Customer;

import java.util.List;

public interface AdminService {

    Customer addCustomer(Customer customer);

    List<Customer> getAll();

    Customer deleteCustomer(Integer id);


    Customer updateCustomer(Integer id);

    Customer updateCustomer(Customer customer);

    Customer searchbyid(Integer id);

}
