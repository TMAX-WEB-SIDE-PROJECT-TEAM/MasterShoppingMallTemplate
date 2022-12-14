package shop.spring_project.Mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import shop.spring_project.DTO.ProductDTO;
import shop.spring_project.Entity.Product;

import java.util.Optional;

@Component
public class ProductMapper extends ModelMapper {
    public Product convertDtoToEntity(ProductDTO productDTO) {return this.map(productDTO, Product.class);}

    public ProductDTO convertEntityToDto(Optional<Product> product) {
        ProductDTO dto = this.map(product, ProductDTO.class);
        return dto;
        //return this.map(product, ProductDTO.class);
    }
}
