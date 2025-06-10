package br.com.portifolio.Cadastro.repository;

import br.com.portifolio.Cadastro.entity.Cadastro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CadastroRepository extends JpaRepository<Cadastro , Long> {
}
