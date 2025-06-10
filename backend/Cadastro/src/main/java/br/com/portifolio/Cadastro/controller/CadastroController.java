package br.com.portifolio.Cadastro.controller;

import br.com.portifolio.Cadastro.dto.CadastroDTO;
import br.com.portifolio.Cadastro.service.CadastroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cadastro")
public class CadastroController {

    private final CadastroService cadastroService;

    public CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @GetMapping
    public List<CadastroDTO> list(){
        return cadastroService.findAll();
    }

    @PostMapping
    public CadastroDTO createCadastro(@RequestBody CadastroDTO dto){
        return cadastroService.createCadastro(dto);
    }

    @GetMapping("{id}")
    public CadastroDTO get (@PathVariable Long id){
        return cadastroService.findById(id);
    }
}
