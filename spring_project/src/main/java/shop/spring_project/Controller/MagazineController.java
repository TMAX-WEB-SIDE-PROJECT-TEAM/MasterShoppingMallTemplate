package shop.spring_project.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.Entity.Magazine;
import shop.spring_project.Service.MagazineService;

import java.util.List;
import java.util.Optional;

@RestController
public class MagazineController {

    @Autowired
    private MagazineService magazineService;

    @GetMapping("/magazine/read/{id}")
    public MagazineDTO getOneMagazine(@PathVariable("id") Long id){
        //return magazineService.getMagazine(id);
        MagazineDTO magazineDTO = magazineService.getMagazine(id);
        return  magazineDTO;
    }

    @GetMapping("/magazine/brand/{lgId}")
    public List<MagazineDTO> getMagazines(@PathVariable("lgId") Long lgId){
        return magazineService.getBrandMagazines(lgId);
    }

    @PostMapping("/magazine/add")
    public Long createMagazine(@RequestBody Magazine magazine){
        return magazineService.addMagazine(magazine);
    }

    @DeleteMapping("/magazine/delete/{id}")
    public Long removeMagazine(@PathVariable("id") Long id){ return  magazineService.deleteMagazine(id); }
}
