package br.leitao.clinica.endpoint;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.leitao.clinica.entity.Paciente;
import br.leitao.clinica.service.PacienteService;

@RestController
public class PacienteEndpoint {
	
	@Autowired
	PacienteService pacienteService;
	

	@RequestMapping("/public/patient/")
	public List<Paciente> findAll(){
		return pacienteService.findAll();
	}
	
	@PostMapping("/public/patient/")
	public List<Paciente> findAll(String nome){
		return pacienteService.findByNome(nome!=null?nome:"");
	}
}