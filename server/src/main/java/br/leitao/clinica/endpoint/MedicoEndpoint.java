package br.leitao.clinica.endpoint;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.leitao.clinica.entity.Medico;
import br.leitao.clinica.repository.MedicoRepository;

@RestController
public class MedicoEndpoint {


	@Autowired
	MedicoRepository repository;
	

	@PostMapping(path="/public/medico/{page}/{limit}", produces = "application/json")
	public Page<Medico> findAll(@PathVariable("page") Integer page
			, @PathVariable("limit") Integer limit
			, @RequestBody(required=false) Medico entity){
		if(entity == null) {
			entity = new Medico();
		}
		return repository.findAll(
		        Example.of(entity, ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING)),
				new PageRequest(page, limit));
	}

	@GetMapping(path="/public/medico/all", produces = "application/json")
	public List<Medico> findAll(){
		return repository.findAll();
	}

	@RequestMapping(path="/public/medico/{id}", produces = "application/json")
	public Optional<Medico> findById(@PathVariable("id") Long id){
		return repository.findById(id);
	}

	@PostMapping(path="/public/medico", produces = "application/json")
	public Medico save(@RequestBody(required=true) Medico entity){
		return repository.save(entity);
	}
}