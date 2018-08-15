package br.leitao.clinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.leitao.clinica.entity.Consulta;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
}
