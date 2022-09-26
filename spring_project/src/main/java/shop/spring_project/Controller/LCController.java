package shop.spring_project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import shop.spring_project.Entity.LargeCategory;
import shop.spring_project.Service.LCService;

import java.util.List;

@RestController
public class LCController {

    @Autowired
    private LCService lcService;

    @GetMapping(value = "/brands")
    public List<LargeCategory> getLargeCategories() {
        return lcService.getBrands();
    }

    @PostMapping("/brands/new/{brandName}")
    public void createBrand(@PathVariable("brandName") String brandName){
        LargeCategory largeCategory = new LargeCategory();
        largeCategory.setName(brandName);

        lcService.addBrand(largeCategory);
    }
}
