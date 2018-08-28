package com.chosensolutions.services;

import com.chosensolutions.models.User;
import com.chosensolutions.validation.EmailExistsException;

public interface IUserService {

    User registerNewUser(User user) throws EmailExistsException;

    User getCurrentAuthUser();

}
