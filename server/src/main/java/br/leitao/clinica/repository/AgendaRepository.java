package br.leitao.clinica.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.entity.Agenda;

interface AgendaRepository extends CrudRepository<Agenda, Long> {
}
