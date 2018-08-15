package br.leitao.clinica.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.entity.Agenda;

public interface AgendaRepository extends CrudRepository<Agenda, Long> {
}
