class MySpecialList{
    public Items : any[] ;
}


// Or i could do:

class MyBetterSpecialList<T>{
    public Items : T[] ;
}

class MySuperCoolItem{
    // bla bla
}

class MyDerivedSuperCoolItem extends MySuperCoolItem{

}

class MyEvenBetterSpecialList<T extends MySuperCoolItem>{
    public Items : T[] ;
}

// This works
let HList : MyEvenBetterSpecialList<MyDerivedSuperCoolItem> = new MyBetterSpecialList<MyDerivedSuperCoolItem>();