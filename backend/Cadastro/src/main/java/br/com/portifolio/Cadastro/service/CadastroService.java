package br.com.portifolio.Cadastro.service;

import br.com.portifolio.Cadastro.dto.CadastroDTO;
import br.com.portifolio.Cadastro.entity.Cadastro;
import br.com.portifolio.Cadastro.exception.CadastroNotFoundException;
import br.com.portifolio.Cadastro.repository.CadastroRepository;
import br.com.portifolio.Cadastro.util.Mapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CadastroService {

    private final CadastroRepository cadastroRepository;

    public CadastroService(CadastroRepository cadastroRepository) {
        this.cadastroRepository = cadastroRepository;
    }

    public List<CadastroDTO> findAll(){
        return cadastroRepository.findAll().stream()
                .map(Mapper::toDTO)
                .toList();
    }

    public CadastroDTO createCadastro(CadastroDTO dto){
        Cadastro cadastro = Mapper.toEntity(dto);
        return Mapper.toDTO(cadastroRepository.save(cadastro));
    }

    public CadastroDTO findById(Long id){
        Cadastro cadastro = cadastroRepository.findById(id).orElseThrow(() ->
            new CadastroNotFoundException("Conta nao encontrada"));
        return Mapper.toDTO(cadastro);
    }
}
