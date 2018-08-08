package br.leitao.clinica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.leitao.clinica.entity.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
	
	public List<Paciente> findByNome(String nome);
	 
}