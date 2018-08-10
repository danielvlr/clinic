package br.leitao.clinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.leitao.clinica.entity.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
	
}