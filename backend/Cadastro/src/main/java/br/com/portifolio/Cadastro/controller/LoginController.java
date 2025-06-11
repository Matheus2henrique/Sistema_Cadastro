package br.com.portifolio.Cadastro.controller;

import br.com.portifolio.Cadastro.dto.CadastroDTO;
import br.com.portifolio.Cadastro.service.CadastroService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

  private final CadastroService cadastroService;

  public LoginController(CadastroService cadastroService) {
    this.cadastroService = cadastroService;
  }

  @PostMapping
  public CadastroDTO login(@RequestBody CadastroDTO dto){
    return cadastroService.login(dto.email,  dto.senha);
  }
}
