package shop.spring_project.Service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.Repository.MagazineRepository;

import java.util.List;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MagazineServiceTest {
    @Autowired
    MagazineService magazineService;
    @Autowired
    MagazineRepository magazineRepository;

}