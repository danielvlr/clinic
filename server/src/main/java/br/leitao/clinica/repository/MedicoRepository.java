package br.leitao.clinica.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.entity.Medico;

interface MedicoRepository extends CrudRepository<Medico, Long> {
}
