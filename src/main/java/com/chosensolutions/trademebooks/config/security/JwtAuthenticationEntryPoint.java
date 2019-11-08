package com.chosensolutions.trademebooks.config.security;

import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;
import com.google.gson.Gson;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static java.util.Collections.singletonList;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException, ServletException {

        //InvalidLoginResponse loginResponse = new InvalidLoginResponse();

        DataWrapperDTO pleaseLoginResponse = new DataWrapperDTO("Nice try, but you have to login first", null, singletonList("Please login to access this route."));
        String jsonLoginResponse = new Gson().toJson(pleaseLoginResponse);

        httpServletResponse.setContentType("application/json");
        httpServletResponse.setStatus(401);
        httpServletResponse.getWriter().print(jsonLoginResponse);
        httpServletResponse.getWriter().print(e.getMessage());
    }

}
