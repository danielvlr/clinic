package br.leitao.clinica.endpoint;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.leitao.clinica.entity.Paciente;
import br.leitao.clinica.repository.PacienteRepository;

@RestController
public class PacienteEndpoint {
	
	@Autowired
	PacienteRepository pacienteRepository;
	

	@PostMapping(path="/public/paciente/{page}/{limit}", produces = "application/json")
	public Page<Paciente> findAll(@PathVariable("page") Integer page
			, @PathVariable("limit") Integer limit
			, @RequestBody(required=false) Paciente paciente){
		if(paciente == null) {
			paciente = new Paciente();
		}
		return pacienteRepository.findAll(
		        Example.of(paciente, ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING)),
				new PageRequest(page, limit));
	}

	@RequestMapping(path="/public/paciente/{id}", produces = "application/json")
	public Optional<Paciente> findAll(@PathVariable("id") Long id){
		return pacienteRepository.findById(id);
	}

}