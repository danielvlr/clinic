package br.leitao.clinica.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import br.leitao.clinica.repository.UserCredentialsRepository;

@Service
public class CustomAuthenticationProvider implements AuthenticationProvider {
 
	@Autowired
	UserCredentialsRepository userCredentialsRespository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String name = authentication.getName();
        String password = authentication.getCredentials().toString();
    	UserCredentials userCredentials = userCredentialsRespository.findByUsernameAndPassword(name,password);
        return new UsernamePasswordAuthenticationToken(name, password, new ArrayList<>());
    }
 
    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(
          UsernamePasswordAuthenticationToken.class);
    }
}