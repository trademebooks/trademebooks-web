package com.chosensolutions.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

/*
 * Sources:
 * https://www.udemy.com/how-to-use-spring-security-to-secure-your-java-applications/learn/v4/t/lecture/1939854?start=0
 */
/*@Configuration
@EnableWebSecurity*/
public class SecurityConfig /* extends WebSecurityConfigurerAdapter*/ {

/*    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("yichen")
                .password("{noop}yichen")
                .roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
*//*            .antMatchers("/css/**", "/index").permitAll()
            .antMatchers("/user/**").hasRole("USER")*//*
                .formLogin()

                .and()
                .httpBasic();
    }*/

}
