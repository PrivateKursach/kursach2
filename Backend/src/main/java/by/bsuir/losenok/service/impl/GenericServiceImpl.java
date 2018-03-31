package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.GenericDAO;
import by.bsuir.losenok.dto.DTO;
import by.bsuir.losenok.dto.converter.DTOConverter;
import by.bsuir.losenok.dto.validator.DTOValidator;
import by.bsuir.losenok.entity.EntityObject;
import by.bsuir.losenok.service.GenericService;
import by.bsuir.losenok.service.exception.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.io.Serializable;

@Transactional
public abstract class GenericServiceImpl<E extends EntityObject<K>, D extends DTO<K>, K extends Serializable> implements GenericService<D, K> {

    private GenericDAO<E, K> genericDao;
    private DTOConverter<E, D> dtoConverter;
    @Autowired
    protected DTOValidator dtoValidator;

    @Override
    public D add(D dto) {
        Assert.notNull(dto);
        Assert.isNull(dto.getId());
        dtoValidator.validate(dto);

        E entity = dtoConverter.getEntity(dto);
        E addedEntity = genericDao.add(entity);
        return dtoConverter.getDto(addedEntity);
    }

    @Override
    public D update(D dto) {
        Assert.notNull(dto);
        Assert.notNull(dto.getId());
        dtoValidator.validate(dto);

        E entityWithGivenId = genericDao.getById(dto.getId());
        if (entityWithGivenId == null) {
            throw new EntityNotFoundException();
        }

        E entity = dtoConverter.getEntity(dto);
        E updatedEntity = genericDao.update(entity);
        return dtoConverter.getDto(updatedEntity);
    }

    @Override
    public void delete(K id) {
        Assert.notNull(id);

        E entityWithGivenId = genericDao.getById(id);
        if (entityWithGivenId == null) {
            throw new EntityNotFoundException();
        }

        genericDao.delete(id);
    }

    @Transactional(readOnly = true)
    @Override
    public D getById(K id) {
        Assert.notNull(id);

        E entity = genericDao.getById(id);
        if (entity == null) {
            throw new EntityNotFoundException();
        }

        return dtoConverter.getDto(entity);
    }

    public void setGenericDao(GenericDAO<E, K> genericDao) {
        this.genericDao = genericDao;
    }

    public void setDtoConverter(DTOConverter<E, D> dtoConverter) {
        this.dtoConverter = dtoConverter;
    }
}
