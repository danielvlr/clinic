package br.leitao.clinica.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.leitao.clinica.entity.Paciente;
import br.leitao.clinica.repository.PacienteRepository;

@Service
public class PacienteService {
	@Autowired
	private PacienteRepository pacienteRepository;

	public List<Paciente> findAll() {
		return pacienteRepository.findAll();
	}
	
	public List<Paciente> findByNome(String nome){
		return pacienteRepository.findByNomeIgnoreCaseContaining(nome);
	}
}
