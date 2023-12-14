package CHernyjj1412.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import CHernyjj1412.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISCHernyjj1412Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Id")
    private Integer id;

    @Column(name = "Фио")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DolzhnostiLo")
    @Convert("DolzhnostiLo")
    @Column(name = "ДолжностиЛо", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiloid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DolzhnostiLo", insertable = false, updatable = false)
    private DolzhnostiLo dolzhnostilo;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getId() {
      return id;
    }

    public void setId(Integer id) {
      this.id = id;
    }

    public String getФио() {
      return фио;
    }

    public void setФио(String фио) {
      this.фио = фио;
    }


}