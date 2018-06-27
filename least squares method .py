#データは「みんなのpython」(SBクリエイティブ)を参照しました.
x=np.array([1.628,3.363,5.145,7.683,9.855])
y=np.array([1.257,3.672,5.841,7.951,9.775])

a= np.array([x,np.ones(x.size)])
#aは2×5行列
'''a=array([[1.628, 3.363, 5.145, 7.683, 9.855],
            [1.   , 1.   , 1.   , 1.   , 1.   ]])'''

a=a.T

'''a=array([[1.628, 1.   ],
            [3.363, 1.   ],
            [5.145, 1.   ],
            [7.683, 1.   ],
            [9.855, 1.   ]])'''

m,c = np.linalg.lstsq(a,y)[0]
#mは傾き.m=1.0169805709922226
#cは切片.c=0.07041593567224476

t =plt.plot(x,y,'<',c="red",markersize=2)
#'<'はマーカーの形の指定.
#cはマーカーの色.
#markersize,msはマーカーの大きさを表す.

t=plt.plot(x,m*x+c)