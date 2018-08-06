package br.leitao.clinica.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.entity.Paciente;

interface PacienteRepository extends CrudRepository<Paciente, Long> {
}
