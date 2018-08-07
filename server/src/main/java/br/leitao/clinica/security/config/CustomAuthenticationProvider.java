package br.leitao.clinica.security.config;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.transaction.annotation.Transactional;

import br.leitao.clinica.security.entity.UserCredentials;
import br.leitao.clinica.security.entity.UserRoles;
import br.leitao.clinica.security.repository.UserCredentialsRepository;
@Configuration
public class CustomAuthenticationProvider implements AuthenticationProvider {
 
	@Autowired
	UserCredentialsRepository userCredentialsRespository;

    @Override
    @Transactional
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String name = authentication.getName();
        String password = authentication.getCredentials().toString();
    	UserCredentials userCredentials = userCredentialsRespository.findByUsernameAndPassword(name,password);
    	if(userCredentials != null) {
    		return new UsernamePasswordAuthenticationToken(name, password, getAuthorities(userCredentials.getUserRoles()));
    	}else {
    		return null;
    	}
    }
 
	private Collection<? extends GrantedAuthority> getAuthorities(Collection<UserRoles> roles) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		roles.stream().map(role-> new SimpleGrantedAuthority(role.getRole())).forEach(authorities::add);;
		return authorities;
	}    
    
    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(
          UsernamePasswordAuthenticationToken.class);
    }
}