package com.nettruyenfake.repository;

import com.nettruyenfake.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users,Long> {

}
