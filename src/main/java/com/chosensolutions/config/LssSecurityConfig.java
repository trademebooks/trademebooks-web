package com.chosensolutions.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class LssSecurityConfig extends WebSecurityConfigurerAdapter {

    public LssSecurityConfig() {
        super();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("yichen")
                .password("{noop}yichen")
                .roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/webjars/**").permitAll();

        http
                .authorizeRequests()
                .antMatchers("/signup", "/user/register").permitAll()
                //.antMatchers("/about").hasAnyAuthority("ADMIN", "USER")// everything that matches /about must have a role of admin or else it will not work
                .antMatchers("/contact").hasAnyAuthority("ADMIN")// everything that matches /about must have a role of admin or else it will not work
                .anyRequest().authenticated()
                .and()
                    .formLogin().loginPage("/login").permitAll()
                    .loginProcessingUrl("/doLogin")

                .and()
                .logout().permitAll().logoutUrl("/doLogout")

                .and()
                    .csrf().disable();
        ;
    }

}
