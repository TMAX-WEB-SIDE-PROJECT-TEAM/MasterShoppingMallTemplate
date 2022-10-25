package shop.spring_project.Mapper;

import org.modelmapper.ModelMapper;
import shop.spring_project.DTO.ProductDTO;
import shop.spring_project.Entity.Product;

import java.util.Optional;

public class ProductMapper extends ModelMapper {
    public Product convertDtoToEntity(ProductDTO productDTO) { return this.map(productDTO, Product.class);}

    public ProductDTO convertEntityToDto(Optional<Product> product) {return this.map(product, ProductDTO.class);}
}
