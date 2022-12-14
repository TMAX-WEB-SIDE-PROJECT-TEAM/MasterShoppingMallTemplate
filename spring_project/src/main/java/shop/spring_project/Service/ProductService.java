package shop.spring_project.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.DTO.ProductDTO;
import shop.spring_project.Entity.Product;
import shop.spring_project.Repository.MagazineRepository;
import shop.spring_project.Repository.ProductRepository;
import shop.spring_project.Mapper.ProductMapper;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper = new ProductMapper();

    public ProductService(ProductRepository productRepository) {this.productRepository = productRepository;}

    @Transactional
    public Long addProduct(ProductDTO productDTO){
        Product entity = productMapper.convertDtoToEntity(productDTO);
        productRepository.save(entity);

        return productDTO.getId();
    }

    public ProductDTO findOne(Long id) {
        Optional<Product> entity = productRepository.findById(id);
        return productMapper.convertEntityToDto(entity);
    }

    public List<ProductDTO> findAll() {
        return productRepository.findAll().stream().map(m -> productMapper.map(m, ProductDTO.class)).collect(Collectors.toList());
    }



    // TODO : findByBrand
    // TODO : findByMediumCategory
}
