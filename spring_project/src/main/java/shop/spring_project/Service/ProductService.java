package shop.spring_project.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.DTO.ProductDTO;
import shop.spring_project.Entity.Product;
import shop.spring_project.Mapper.ProductMapper;
import shop.spring_project.Repository.ProductRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

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

    //카테고리별 조회
    //상품 이미지 조회

}
