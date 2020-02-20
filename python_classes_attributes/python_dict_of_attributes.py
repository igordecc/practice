class Addict:

    def __init__(self):
        raise NotImplementedError()

    def __setattr__(self, key, value):
        raise NotImplementedError()

    def __getattr__(self, key):
        raise NotImplementedError()

    def __str__(self):
        raise NotImplementedError()

    def __repr__(self):
        raise NotImplementedError()

    def to_dict(self):
        """
        Converts this Addict instance to a regular dict.
        """
        raise NotImplementedError()


def test_can_assign_and_access_field():
    d = Addict()
    d.a = lambda: 1
    assert d.a() == 1, "value returned differs from value assigned"


def test_can_assign_and_access_nested_field():
    d = Addict()
    d.a.b.c = 1
    assert d.a.b.c == 1, "value returned differs from value assigned"


def test_dict_conversion_works():
    d = Addict()
    d.a = 1
    assert d.to_dict() == dict(a=1), "to_dict is inconsistent with Addict instance"


def test_read_only_access_leave_no_trace():
    d = Addict()
    _ = d.a.t.a
    assert d.to_dict() == dict(), "instance is polluted by readonly access"


if __name__ == '__main__':
    test_can_assign_and_access_field()
    test_can_assign_and_access_nested_field()
    test_dict_conversion_works()
    test_read_only_access_leave_no_trace()
    print("tests passed")