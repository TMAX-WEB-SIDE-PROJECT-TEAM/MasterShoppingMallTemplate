package shop.spring_project.Controller;

import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.Entity.Magazine;
import shop.spring_project.Service.MagazineService;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class MagazineController {

    @Autowired
    private MagazineService magazineService;

    @GetMapping("/magazine/read/{id}")
    public MagazineDTO getOneMagazine(@PathVariable("id") Long id){
        MagazineDTO magazineDTO = magazineService.findMagazine(id);
        return  magazineDTO;
    }

    @GetMapping("/magazine/brand/{lgId}")
    public List<MagazineDTO> getMagazines(@PathVariable("lgId") Long lgId){
        return magazineService.findBrandMagazines(lgId);
    }

    @GetMapping("/magazine/all")
    public List<MagazineDTO> getAllMagazines() {
        return magazineService.findAllMagazines();
    }
    @PostMapping("/magazine/add")
    public Long createMagazine(@RequestBody Magazine magazine){
        return magazineService.addMagazine(magazine);
    }

    @DeleteMapping("/magazine/delete/{id}")
    public Long removeMagazine(@PathVariable("id") Long id){ return  magazineService.deleteMagazine(id); }

    @PutMapping("/magazine/edit")
    public Long updateMagazine(@RequestBody Magazine magazine) { return  magazineService.editMagazine(magazine); }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> handleNoSuchElementFoundException(NoSuchElementException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }
}
