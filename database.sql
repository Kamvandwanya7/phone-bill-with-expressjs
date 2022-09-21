sudo -u postgres createdb phone_bill;

sudo -u postgres createuser kamva -P;

password kv443

grant all privileges on database phone_bill to kamva;



create table price_plan{
   plan_id serial not null primary key;
   plan_name text not null;
   
}

INSERT INTO price_plan (plan_name) VALUES('sms100');
INSERT INTO price_plan (plan_name) VALUES('call100');
INSERT INTO price_plan (plan_name) VALUES('text-me');


create table user{
    id serial not null primary key,
    sms_price int;
    call_price int
FOREIGN KEY (id) REFERENCES price_plan(plan_id)

}

