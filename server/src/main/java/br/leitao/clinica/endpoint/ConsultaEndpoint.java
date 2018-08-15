package br.leitao.clinica.endpoint;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.leitao.clinica.entity.Consulta;
import br.leitao.clinica.repository.ConsultaRepository;

@RestController
public class ConsultaEndpoint {

	@Autowired
	ConsultaRepository repository;

	
	@PostMapping(path="/public/consulta/medico", produces = "application/json")
	public List<Consulta> findByExample(@RequestBody(required=false) Consulta consulta){
		if(consulta == null) {
			consulta = new Consulta();
		}
		return repository.findAll(Example.of(consulta, ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING)));
	}	

	@PostMapping(path="/public/consulta/{page}/{limit}", produces = "application/json")
	public Page<Consulta> findAll(@PathVariable("page") Integer page
			, @PathVariable("limit") Integer limit
			, @RequestBody(required=false) Consulta consulta){
		if(consulta == null) {
			consulta = new Consulta();
		}
		return repository.findAll(
		        Example.of(consulta, ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING)),
				new PageRequest(page, limit));
	}

	@GetMapping(path="/public/consulta/all", produces = "application/json")
	public List<Consulta> findAll(){
		return repository.findAll();
	}

	@RequestMapping(path="/public/consulta/{id}", produces = "application/json")
	public Optional<Consulta> findById(@PathVariable("id") Long id){
		return repository.findById(id);
	}

	@PostMapping(path="/public/consulta", produces = "application/json")
	public Consulta save(@RequestBody(required=true) Consulta consulta){
		return repository.save(consulta);
	}
}