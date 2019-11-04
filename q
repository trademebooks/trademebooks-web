[1mdiff --git a/src/main/java/com/chosensolutions/trademebooks/controllers/AuthController.java b/src/main/java/com/chosensolutions/trademebooks/controllers/AuthController.java[m
[1mindex 8bdc75c..dac0b1a 100644[m
[1m--- a/src/main/java/com/chosensolutions/trademebooks/controllers/AuthController.java[m
[1m+++ b/src/main/java/com/chosensolutions/trademebooks/controllers/AuthController.java[m
[36m@@ -7,6 +7,7 @@[m [mimport com.chosensolutions.trademebooks.services.auth.UserAuthenticationService;[m
 import com.chosensolutions.trademebooks.services.user.UserService;[m
 import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;[m
 import com.chosensolutions.trademebooks.utils.ValidationErrorService;[m
[32m+[m
 import org.springframework.beans.factory.annotation.Autowired;[m
 import org.springframework.http.HttpStatus;[m
 import org.springframework.http.ResponseEntity;[m
[36m@@ -16,9 +17,7 @@[m [mimport org.springframework.web.bind.annotation.RequestBody;[m
 import org.springframework.web.bind.annotation.RequestMapping;[m
 import org.springframework.web.bind.annotation.RestController;[m
 [m
[31m-import javax.naming.Binding;[m
 import javax.validation.Valid;[m
[31m-import java.util.Collections;[m
 import java.util.List;[m
 [m
 @RequestMapping("/api/web/v1/auth")[m
[36m@@ -31,9 +30,6 @@[m [mpublic class AuthController {[m
     @Autowired[m
     private UserAuthenticationService userAuthenticationService;[m
 [m
[31m-    @Autowired[m
[31m-    private UserService userService;[m
[31m-[m
     @PostMapping("/register")[m
     public ResponseEntity<DataWrapperDTO> register(@Valid @RequestBody RegisterUserRequestDTO registerUserRequestDTO, BindingResult bindingResult) throws Exception {[m
         // 1. Validation[m
[36m@@ -45,12 +41,12 @@[m [mpublic class AuthController {[m
         }[m
 [m
         // 2. Business Logic[m
[31m-        User newUser = userAuthenticationService.registerUser(registerUserRequestDTO);[m
[32m+[m[32m        User registeredUser = userAuthenticationService.registerUser(registerUserRequestDTO);[m
 [m
         // 3. Success Response[m
         return ResponseEntity[m
                 .status(HttpStatus.CREATED)[m
[31m-                .body(new DataWrapperDTO(newUser, "User " + newUser.getEmail() + " successfully registered.", null));[m
[32m+[m[32m                .body(new DataWrapperDTO(registeredUser, "The email " + registeredUser.getEmail() + " has successfully registered.", null));[m
     }[m
 [m
     @RequestMapping("/login")[m
[36m@@ -60,7 +56,6 @@[m [mpublic class AuthController {[m
         String password = loginDTO.getPassword();[m
         */[m
 [m
[31m-[m
         return null;[m
     }[m
 [m
[1mdiff --git a/src/main/java/com/chosensolutions/trademebooks/exceptions/CustomResponseEntityExceptionHandler.java b/src/main/java/com/chosensolutions/trademebooks/exceptions/CustomResponseEntityExceptionHandler.java[m
[1mindex 5986745..4dbece7 100644[m
[1m--- a/src/main/java/com/chosensolutions/trademebooks/exceptions/CustomResponseEntityExceptionHandler.java[m
[1m+++ b/src/main/java/com/chosensolutions/trademebooks/exceptions/CustomResponseEntityExceptionHandler.java[m
[36m@@ -1,6 +1,5 @@[m
 package com.chosensolutions.trademebooks.exceptions;[m
 [m
[31m-[m
 import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;[m
 import org.springframework.http.HttpStatus;[m
 import org.springframework.http.ResponseEntity;[m
[36m@@ -16,31 +15,11 @@[m [mimport java.util.Collections;[m
 @RestController[m
 public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {[m
 [m
[31m-/*    @ExceptionHandler[m
[31m-    public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex, WebRequest request){[m
[31m-        ProjectIdExceptionResponse exceptionResponse = new ProjectIdExceptionResponse(ex.getMessage());[m
[31m-        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);[m
[31m-    }*/[m
[31m-/*[m
[31m-[m
[31m-    @ExceptionHandler[m
[31m-    public final ResponseEntity<Object> handleProjectNotFoundException(ProjectNotFoundException ex, WebRequest request){[m
[31m-        ProjectNotFoundExceptionResponse exceptionResponse = new ProjectNotFoundExceptionResponse(ex.getMessage());[m
[31m-        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);[m
[31m-    }[m
[31m-*/[m
[31m-[m
     @ExceptionHandler[m
     public final ResponseEntity<DataWrapperDTO> handleUserEmailAlreadyExists(UserEmailAlreadyExistsException exception, WebRequest request) {[m
[31m-/*[m
[31m-        DataWrapperDTO dataWrapperDTO = new DataWrapperDTO(null, exception.getMessage(), Collections.singletonList(exception.getMessage()));[m
[31m-        ResponseEntity<DataWrapperDTO> response = new ResponseEntity<>(dataWrapperDTO, HttpStatus.CONFLICT);[m
[31m-        //return response;[m
[31m-*/[m
         return ResponseEntity[m
                 .status(HttpStatus.CONFLICT)[m
                 .body(new DataWrapperDTO(null, exception.getMessage(), Collections.singletonList(exception.getMessage())));[m
 [m
     }[m
[31m-[m
 }[m
[1mdiff --git a/src/main/java/com/chosensolutions/trademebooks/services/UserAuthenticationService.java b/src/main/java/com/chosensolutions/trademebooks/services/UserAuthenticationService.java[m
[1mindex 6034283..6a73813 100644[m
[1m--- a/src/main/java/com/chosensolutions/trademebooks/services/UserAuthenticationService.java[m
[1m+++ b/src/main/java/com/chosensolutions/trademebooks/services/UserAuthenticationService.java[m
[36m@@ -5,11 +5,9 @@[m [mimport com.chosensolutions.trademebooks.exceptions.UserEmailAlreadyExistsExcepti[m
 import com.chosensolutions.trademebooks.models.User;[m
 import com.chosensolutions.trademebooks.repositories.UserRepository;[m
 import org.springframework.beans.factory.annotation.Autowired;[m
[31m-import org.springframework.http.HttpStatus;[m
 import org.springframework.security.core.context.SecurityContextHolder;[m
 import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;[m
 import org.springframework.stereotype.Service;[m
[31m-import org.springframework.web.server.ResponseStatusException;[m
 [m
 @Service[m
 public class UserAuthenticationService {[m
[36m@@ -20,7 +18,7 @@[m [mpublic class UserAuthenticationService {[m
     @Autowired[m
     private BCryptPasswordEncoder bCryptPasswordEncoder;[m
 [m
[31m-    public User registerUser(RegisterUserRequestDTO registerUserRequestDTO) throws Exception {[m
[32m+[m[32m    public User registerUser(RegisterUserRequestDTO registerUserRequestDTO) {[m
         try {[m
             User user = new User();[m
             user.setEmail(registerUserRequestDTO.getEmail());[m
