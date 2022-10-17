package shop.spring_project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shop.spring_project.Entity.Magazine;
import shop.spring_project.Service.MagazineService;

import java.util.List;
import java.util.Optional;

@RestController
public class MagazineController {

    @Autowired
    private MagazineService magazineService;

    @GetMapping("/magazine/read/{id}")
    public Optional<Magazine> getOneMagazine(@PathVariable("id") Long id){
        return magazineService.getMagazine(id);
    }

    @GetMapping("/magazine/brand/{lgId}")
    public List<Magazine> getMagazines(@PathVariable("lgId") Long lgId){
        return magazineService.getBrandMagazines(lgId);
    }

    @PostMapping("/magazine/add")
    public Long createMagazine(@RequestBody Magazine magazine){
        return magazineService.addMagazine(magazine);
    }


}
