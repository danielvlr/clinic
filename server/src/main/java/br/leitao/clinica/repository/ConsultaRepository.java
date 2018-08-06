package br.leitao.clinica.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.entity.Consulta;

interface ConsultaRepository extends CrudRepository<Consulta, Long> {
}
