package br.com.portifolio.Cadastro.util;

import br.com.portifolio.Cadastro.dto.CadastroDTO;
import br.com.portifolio.Cadastro.entity.Cadastro;

public class Mapper {

    public static Cadastro toEntity(CadastroDTO dto){
        Cadastro entity = new Cadastro();
        entity.setNome(dto.nome);
        entity.setCpf(dto.cpf);
        entity.setEmail(dto.email);
        entity.setTelefone(dto.telefone);
        entity.setSenha(dto.senha);
        return entity;
    }

    public static CadastroDTO toDTO(Cadastro enity){
        CadastroDTO dto = new CadastroDTO();
        dto.nome = enity.getNome();
        dto.cpf = enity.getCpf();
        dto.email = enity.getEmail();
        dto.telefone = enity.getTelefone();
        dto.senha = enity.getSenha();
        return dto;
    }

}
