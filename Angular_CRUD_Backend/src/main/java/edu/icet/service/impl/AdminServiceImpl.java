package edu.icet.service.impl;

import edu.icet.dto.Customer;
import edu.icet.entity.CustomerEntity;
import edu.icet.repository.CustomerRepository;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor

public class AdminServiceImpl implements CustomerService {

    final CustomerRepository repository;
    final ModelMapper modelMapper;

    @Override
    public Customer addCustomer(Customer customer) {
        CustomerEntity customerEntity = modelMapper.map(customer, CustomerEntity.class);
        repository.save(customerEntity);
        return customer;
    }

    @Override
    public List<Customer> getAll() {
        List<Customer> customerArraylist = new ArrayList<>();
        List<CustomerEntity> all = repository.findAll();

        all.forEach(customerEntity -> {
            customerArraylist.add(modelMapper.map(customerEntity, Customer.class));
        });
        return customerArraylist;


    }
    @Override
    public Customer deleteCustomer(Integer id){
        repository.deleteById(id);
        return null;
    }

    @Override
    public Customer updateCustomer(Integer id) {
        repository.deleteById(id);
        return null;
    }

    @Override
    public Customer updateCustomer(Customer customer) {
        repository.save(modelMapper.map(customer,CustomerEntity.class));
        return customer;
    }
    @Override
    public Customer searchbyid(Integer id){
        return modelMapper.map(repository.findById(id),Customer.class);
    }



}
