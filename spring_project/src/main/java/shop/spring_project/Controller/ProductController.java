package shop.spring_project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.DTO.ProductDTO;
import shop.spring_project.Entity.Product;
import shop.spring_project.Service.ProductService;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("product/add")
    public Long createProduct(@RequestBody ProductDTO productDTO){
        return productService.addProduct(productDTO);
    }

    @GetMapping("product/read/{id}")
    public ProductDTO getProduct(@PathVariable("id") Long id){
        ProductDTO productDTO = productService.findOne(id);
        return  productDTO;
    }

    @GetMapping("/product/all")
    public List<ProductDTO> getAllProducts() {
        return productService.findAll();
    }
}
