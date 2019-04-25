package com.chosensolutions.cusbe.services;

import com.chosensolutions.cusbe.models.User;
import com.chosensolutions.cusbe.validation.EmailExistsException;

public interface IUserService {

    User registerNewUser(User user) throws EmailExistsException;

    User getCurrentAuthUser();

}
