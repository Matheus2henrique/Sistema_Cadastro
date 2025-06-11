package br.com.portifolio.Cadastro.repository;

import br.com.portifolio.Cadastro.entity.Cadastro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CadastroRepository extends JpaRepository<Cadastro , Long> {
  Optional<Cadastro> findByEmailAndSenha(String email, String senha);
}
