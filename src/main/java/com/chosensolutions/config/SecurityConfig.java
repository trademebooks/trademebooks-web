package com.chosensolutions.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    public SecurityConfig() {
        super();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(getPasswordEncoder());

/*        auth
                .inMemoryAuthentication()
                .withUser("yichen")
                .password("{noop}yichen")
                .roles("USER");*/
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // JS and CSS
        http
                .authorizeRequests()
                .antMatchers("/webjars/**", "/js/**", "/css/**", "/images/**")
                .permitAll();

        // Public pages that anyone can view
        http
                .authorizeRequests()
                .antMatchers("/landing", "/about", "/terms", "/api/v1/**", "/api/v2/**")
                .permitAll();

        http
                .authorizeRequests()
                .antMatchers("/", "/signup", "/user/register").permitAll()
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
    }

    private PasswordEncoder getPasswordEncoder() {
        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence charSequence) {
                return charSequence.toString();
            }

            @Override
            public boolean matches(CharSequence charSequence, String s) {
                return true;
            }
        };
    }
}
